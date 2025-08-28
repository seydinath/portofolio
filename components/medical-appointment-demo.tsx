"use client";
import React, { useState } from "react";
// import a calendar library here if needed
import clsx from "clsx";

// Dummy data for doctors and patients
const doctors = [
  { id: 1, name: "Dr. A. Diallo", specialty: "Cardiologue" },
  { id: 2, name: "Dr. S. Ndiaye", specialty: "Généraliste" },
  { id: 3, name: "Dr. M. Sow", specialty: "Pédiatre" },
];

type PatientStatus =
  | "Non confirmé"
  | "Confirmé"
  | "En attente"
  | "En cours"
  | "Terminé"
  | "Erreur de planning"
  | "Indisponible";

type Patient = {
  id: number;
  name: string;
  phone: string;
  status: PatientStatus;
  doctor: number | null;
  time: string;
};

const initialQueue: Patient[] = [
  { id: 1, name: "Fatou Diop", phone: "77 123 4567", status: "Non confirmé", doctor: null, time: "08:00" },
  { id: 2, name: "Moussa Ba", phone: "76 234 5678", status: "Confirmé", doctor: 1, time: "08:30" },
  { id: 3, name: "Awa Sy", phone: "78 345 6789", status: "En attente", doctor: 2, time: "09:00" },
];

export default function MedicalAppointmentDemo() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [queue, setQueue] = useState<Patient[]>(initialQueue);
  const [selectedDoctor, setSelectedDoctor] = useState<number|null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [showModal, setShowModal] = useState<{open: boolean, patient: Patient|null}>({open: false, patient: null});
  const [showProfile, setShowProfile] = useState<{open: boolean, patient: any|null}>({open: false, patient: null});

  // Status color mapping
  const statusColors: Record<PatientStatus, string> = {
    "Non confirmé": "bg-gray-200 border-gray-400 text-gray-600",
    "Confirmé": "bg-blue-100 border-blue-400 text-blue-700",
    "En attente": "bg-yellow-50 border-yellow-300 text-yellow-700",
    "En cours": "bg-emerald-100 border-emerald-400 text-emerald-700",
    "Terminé": "bg-green-50 border-green-300 text-green-700",
    "Erreur de planning": "bg-red-100 border-red-400 text-red-700",
    "Indisponible": "bg-slate-100 border-slate-400 text-slate-700",
  };

  // Assign patient to doctor
  const assignPatient = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId
          ? { ...p, status: "En cours", doctor: selectedDoctor ?? p.doctor }
          : p
      ) as Patient[]
    );
  };

  // Mark patient as done
  const finishConsultation = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId ? { ...p, status: "Terminé" } : p
      ) as Patient[]
    );
  };

  // Confirm patient
  const confirmPatient = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId ? { ...p, status: "Confirmé" } : p
      ) as Patient[]
    );
  };

  // Mark patient as arrived
  const markArrived = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId ? { ...p, status: "En attente" } : p
      ) as Patient[]
    );
  };

  // Error/Unavailable
  const setError = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId ? { ...p, status: "Erreur de planning" } : p
      ) as Patient[]
    );
  };
  const setUnavailable = (patientId: number) => {
    setQueue((q) =>
      q.map((p) =>
        p.id === patientId ? { ...p, status: "Indisponible" } : p
      ) as Patient[]
    );
  };

  // Edit patient
  const editPatient = (patient: Patient) => {
    setShowModal({open: true, patient});
  };
  // Delete patient
  const deletePatient = (patientId: number) => {
    setQueue((q) => q.filter((p) => p.id !== patientId));
    setShowModal({open: false, patient: null});
  };
  // Add new patient
  // Formulaire patient
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    naissance: "",
    phone: "",
    email: "",
    adresse: "",
    secu: "",
    contactUrgenceNom: "",
    contactUrgenceTel: "",
    contactUrgenceLien: "",
    typeVisite: "Consultation",
    tarif: "",
    doctor: doctors[0]?.id ?? null,
    date: selectedDate.toISOString().slice(0,10),
    heure: "08:00",
  });
  const [formErrors, setFormErrors] = useState<{[key:string]:string}>({});
  const [success, setSuccess] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Suggestions dynamiques pour le prénom
  const commonNames = ["Fatou", "Moussa", "Awa", "Cheikh", "Mariama", "Abdou", "Seynabou", "Ibrahima", "Khadija", "Mamadou"];
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "prenom") {
      setSuggestions(commonNames.filter(n => n.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value));
    }
  };

  const validateForm = () => {
    const errors: {[key:string]:string} = {};
    if (!formData.nom) errors.nom = "Nom requis";
    if (!formData.prenom) errors.prenom = "Prénom requis";
    if (!formData.sexe) errors.sexe = "Sexe requis";
    if (!formData.naissance) errors.naissance = "Date de naissance requise";
    if (!formData.phone) errors.phone = "Téléphone requis";
    if (!formData.typeVisite) errors.typeVisite = "Type de visite requis";
    if (!formData.tarif || Number(formData.tarif) <= 0) errors.tarif = "Tarif requis";
    if (!formData.doctor) errors.doctor = "Médecin requis";
    if (!formData.date) errors.date = "Date requise";
    if (!formData.heure) errors.heure = "Heure requise";
    return errors;
  };

  const handleCreatePatient = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    const newId = queue.length ? Math.max(...queue.map(p => p.id)) + 1 : 1;
    const newPatient = {
      id: newId,
      name: formData.nom + " " + formData.prenom,
      status: "Non confirmé" as PatientStatus,
      time: formData.heure,
      // Ajout des infos complètes pour le profil
      ...formData,
    };
    setQueue([
      ...queue,
      newPatient,
    ]);
    setShowForm(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setFormData({
      nom: "",
      prenom: "",
      sexe: "",
      naissance: "",
      phone: "",
      email: "",
      adresse: "",
      secu: "",
      contactUrgenceNom: "",
      contactUrgenceTel: "",
      contactUrgenceLien: "",
      typeVisite: "Consultation",
      tarif: "",
      doctor: doctors[0]?.id ?? null,
      date: selectedDate.toISOString().slice(0,10),
      heure: "08:00",
    });
    setFormErrors({});
    setSuggestions([]);
  };
  return (
    <div className="bg-white/80 rounded-2xl shadow-emerald-300/30 shadow-xl p-0 max-w-7xl mx-auto flex h-[80vh] animate-fade-in overflow-hidden">
      {/* Sidebar: Doctors & Filters */}
      <aside className="w-72 bg-gradient-to-br from-emerald-50 to-green-100 p-6 border-r border-emerald-200 flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4 text-emerald-600">Médecins</h3>
          <ul className="space-y-2">
            {doctors.map((doc) => (
              <li key={doc.id}>
                <button
                  className={clsx(
                    "w-full text-left px-3 py-2 rounded-lg font-medium border hover:bg-emerald-100 transition",
                    selectedDoctor === doc.id && "bg-emerald-200 border-emerald-400 text-emerald-700"
                  )}
                  onClick={() => setSelectedDoctor(doc.id)}
                >
                  {doc.name} <span className="text-xs text-gray-500">({doc.specialty})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 font-medium">Spécialité</label>
          <select
            className="w-full p-2 border rounded-lg"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">Toutes</option>
            {[...new Set(doctors.map((d) => d.specialty))].map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 font-medium">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg"
            value={selectedDate.toISOString().slice(0, 10)}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
        </div>
        <button
          className="mt-4 w-full px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition font-semibold"
          onClick={() => setShowForm(true)}
        >
          + Nouvelle visite patient
        </button>
      </aside>
      {/* Modal Formulaire Patient */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 animate-fade-in">
          <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl relative overflow-y-auto max-h-[90vh] animate-slide-up" onSubmit={handleCreatePatient}>
            <button type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowForm(false)}>✕</button>
            <h4 className="text-2xl font-bold mb-6 text-emerald-600">Nouvelle fiche patient</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium">Nom</label>
                <input name="nom" value={formData.nom} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.nom && "border-red-500")}/>
                {formErrors.nom && <div className="text-xs text-red-500">{formErrors.nom}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Prénom</label>
                <input name="prenom" value={formData.prenom} onChange={handleFormChange} required autoComplete="off" className={clsx("w-full p-2 border rounded", formErrors.prenom && "border-red-500")}/>
                {formErrors.prenom && <div className="text-xs text-red-500">{formErrors.prenom}</div>}
                {suggestions.length > 0 && (
                  <ul className="bg-white border rounded shadow mt-1 absolute z-10">
                    {suggestions.map((s) => (
                      <li key={s} className="px-2 py-1 cursor-pointer hover:bg-emerald-100" onClick={() => { setFormData(f => ({...f, prenom: s})); setSuggestions([]); }}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Sexe</label>
                <select name="sexe" value={formData.sexe} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.sexe && "border-red-500")}> 
                  <option value="">Sélectionner</option>
                  <option value="F">Femme</option>
                  <option value="H">Homme</option>
                  <option value="A">Autre</option>
                </select>
                {formErrors.sexe && <div className="text-xs text-red-500">{formErrors.sexe}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Date de naissance</label>
                <input type="date" name="naissance" value={formData.naissance} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.naissance && "border-red-500")}/>
                {formErrors.naissance && <div className="text-xs text-red-500">{formErrors.naissance}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Téléphone</label>
                <input name="phone" value={formData.phone} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.phone && "border-red-500")}/>
                {formErrors.phone && <div className="text-xs text-red-500">{formErrors.phone}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Adresse</label>
                <input name="adresse" value={formData.adresse} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">N° Sécurité Sociale</label>
                <input name="secu" value={formData.secu} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Contact d'urgence (Nom)</label>
                <input name="contactUrgenceNom" value={formData.contactUrgenceNom} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Contact d'urgence (Téléphone)</label>
                <input name="contactUrgenceTel" value={formData.contactUrgenceTel} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Lien avec le contact d'urgence</label>
                <input name="contactUrgenceLien" value={formData.contactUrgenceLien} onChange={handleFormChange} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Type de visite</label>
                <select name="typeVisite" value={formData.typeVisite} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.typeVisite && "border-red-500")}> 
                  <option value="Consultation">Consultation</option>
                  <option value="Urgence">Urgence</option>
                  <option value="Suivi">Suivi</option>
                  <option value="Bilan">Bilan</option>
                </select>
                {formErrors.typeVisite && <div className="text-xs text-red-500">{formErrors.typeVisite}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Tarif (€)</label>
                <input name="tarif" value={formData.tarif} onChange={handleFormChange} type="number" min="0" step="0.01" required className={clsx("w-full p-2 border rounded", formErrors.tarif && "border-red-500")}/>
                {formErrors.tarif && <div className="text-xs text-red-500">{formErrors.tarif}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Médecin</label>
                <select name="doctor" value={formData.doctor} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.doctor && "border-red-500")}> 
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>
                  ))}
                </select>
                {formErrors.doctor && <div className="text-xs text-red-500">{formErrors.doctor}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Date de visite</label>
                <input type="date" name="date" value={formData.date} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.date && "border-red-500")}/>
                {formErrors.date && <div className="text-xs text-red-500">{formErrors.date}</div>}
              </div>
              <div>
                <label className="block text-sm font-medium">Heure de visite</label>
                <input type="time" name="heure" value={formData.heure} onChange={handleFormChange} required className={clsx("w-full p-2 border rounded", formErrors.heure && "border-red-500")}/>
                {formErrors.heure && <div className="text-xs text-red-500">{formErrors.heure}</div>}
              </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">Créer la fiche patient</button>
          </form>
        </div>
      )}
      {success && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50 font-bold">Patient créé avec succès !</div>
      )}
      <main className="flex-1 p-8 overflow-y-auto">
        <h3 className="text-2xl font-bold mb-6 text-emerald-600">Rendez-vous du {selectedDate.toLocaleDateString()}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queue
            .filter((p) =>
              (!selectedDoctor || p.doctor === selectedDoctor) &&
              (!selectedSpecialty || doctors.find((d) => d.id === p.doctor)?.specialty === selectedSpecialty)
            )
            .map((patient) => (
              <div
                key={patient.id}
                className={clsx(
                  "p-5 rounded-xl shadow border flex flex-col gap-2 cursor-pointer hover:scale-[1.02] transition",
                  statusColors[patient.status]
                )}
                onClick={() => setShowModal({open: true, patient})}
              >
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-lg">{patient.name}</div>
                  <span className="text-xs px-2 py-1 rounded bg-black/10">{patient.time}</span>
                </div>
                <div className="text-sm text-gray-500">{patient.phone}</div>
                <div className="text-xs font-bold">{patient.status}</div>
                {patient.doctor && (
                  <div className="text-xs text-emerald-500">
                    {doctors.find((d) => d.id === patient.doctor)?.name}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Modal for patient actions */}
        {showModal.open && showModal.patient && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowModal({open: false, patient: null})}>✕</button>
              <h4 className="text-xl font-bold mb-4">{showModal.patient.name}</h4>
              <div className="mb-2 text-sm text-gray-500">Téléphone: {showModal.patient.phone}</div>
              <div className="mb-2 text-sm">Heure: {showModal.patient.time}</div>
              <div className="mb-2 text-sm">Statut: <span className={statusColors[showModal.patient.status]}>{showModal.patient.status}</span></div>
              <div className="mb-4 text-sm">Médecin: {showModal.patient?.doctor ? doctors.find((d) => d.id === showModal.patient?.doctor)?.name : "Non assigné"}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600" onClick={() => assignPatient(showModal.patient!.id)}>Commencer visite</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => confirmPatient(showModal.patient!.id)}>Patient confirmé</button>
                <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => markArrived(showModal.patient!.id)}>Patient arrivé</button>
                <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => finishConsultation(showModal.patient!.id)}>Compléter visite</button>
                <button className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500" onClick={() => editPatient(showModal.patient!)}>Modifier</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deletePatient(showModal.patient!.id)}>Supprimer</button>
                <button className="px-3 py-1 bg-slate-500 text-white rounded hover:bg-slate-600" onClick={() => setError(showModal.patient!.id)}>Erreur planning</button>
                <button className="px-3 py-1 bg-slate-400 text-white rounded hover:bg-slate-500" onClick={() => setUnavailable(showModal.patient!.id)}>Indisponible</button>
              </div>
              <button className="w-full px-4 py-2 bg-black/10 rounded-lg font-semibold" onClick={() => { setShowProfile({open: true, patient: showModal.patient}); }}>Voir profil patient</button>
            </div>
          </div>
        )}
      {/* Modal Profil Patient */}
      {showProfile.open && showProfile.patient && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowProfile({open: false, patient: null})}>✕</button>
            <h4 className="text-2xl font-bold mb-4 text-emerald-600">Profil du patient</h4>
            <div className="space-y-2">
              <div><span className="font-semibold">Nom :</span> {showProfile.patient.nom} {showProfile.patient.prenom}</div>
              <div><span className="font-semibold">Sexe :</span> {showProfile.patient.sexe}</div>
              <div><span className="font-semibold">Date de naissance :</span> {showProfile.patient.naissance}</div>
              <div><span className="font-semibold">Téléphone :</span> {showProfile.patient.phone}</div>
              <div><span className="font-semibold">Email :</span> {showProfile.patient.email}</div>
              <div><span className="font-semibold">Adresse :</span> {showProfile.patient.adresse}</div>
              <div><span className="font-semibold">N° Sécurité Sociale :</span> {showProfile.patient.secu}</div>
              <div><span className="font-semibold">Contact d'urgence :</span> {showProfile.patient.contactUrgenceNom} ({showProfile.patient.contactUrgenceTel}) - {showProfile.patient.contactUrgenceLien}</div>
              <div><span className="font-semibold">Type de visite :</span> {showProfile.patient.typeVisite}</div>
              <div><span className="font-semibold">Tarif :</span> {showProfile.patient.tarif} €</div>
              <div><span className="font-semibold">Médecin :</span> {doctors.find((d) => d.id === Number(showProfile.patient.doctor))?.name}</div>
              <div><span className="font-semibold">Date de visite :</span> {showProfile.patient.date}</div>
              <div><span className="font-semibold">Heure de visite :</span> {showProfile.patient.heure}</div>
              <div><span className="font-semibold">Statut :</span> <span className={statusColors[showProfile.patient.status as PatientStatus]}>{showProfile.patient.status}</span></div>
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
  );
}
