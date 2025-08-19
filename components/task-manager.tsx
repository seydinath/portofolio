"use client"

import { useState } from "react"
// ...existing code...
// Pour drag & drop
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Button } from "@/components/ui/button"
import { Bell, BarChart2, RefreshCcw } from "lucide-react"

// Menu déroulant pour les actions sur une tâche
interface MenuActionsProps {
  onMove: (status: "todo" | "inprogress" | "done") => void;
  onEdit: () => void;
  onDelete: () => void;
}

// Types et interfaces
interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "inprogress" | "done";
  createdAt: number;
  priority?: "low" | "medium" | "high";
  tags?: string[];
  dueDate?: string;
  assignedTo?: string;
}

interface MenuActionsProps {
  onMove: (status: "todo" | "inprogress" | "done") => void;
  onEdit: () => void;
  onDelete: () => void;
}

const MenuActions: React.FC<MenuActionsProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="inline-block text-left">
      <Button size="sm" variant="outline" onClick={() => setOpen(o => !o)} className="flex items-center gap-1">
        Actions
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </Button>
      {open && (
        <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in-up">
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300" onClick={() => { props.onMove("todo"); setOpen(false); }}>Déplacer vers "À faire"</button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-100 dark:hover:bg-yellow-900 text-yellow-700 dark:text-yellow-300" onClick={() => { props.onMove("inprogress"); setOpen(false); }}>Déplacer vers "En cours"</button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300" onClick={() => { props.onMove("done"); setOpen(false); }}>Déplacer vers "Terminé"</button>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300" onClick={() => { props.onEdit(); setOpen(false); }}>Éditer</button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 dark:hover:bg-red-900 text-red-700 dark:text-red-300" onClick={() => { props.onDelete(); setOpen(false); }}>Supprimer</button>
          </div>
        </div>
      )}
      </div>
  );
}

// Tâche type enrichie
interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "inprogress" | "done"
  createdAt: number
  priority?: "low" | "medium" | "high"
  tags?: string[]
  dueDate?: string
  assignedTo?: string
}

const users = ["Alice", "Bob", "Charlie", "Vous"];
const tagsList = ["UI", "Backend", "Urgent", "Design", "Bug"];
const initialTasks: Task[] = [
  { id: "1", title: "Créer la maquette", description: "Design Notion-like", status: "todo", createdAt: Date.now(), priority: "medium", tags: ["UI"], assignedTo: "Alice" },
  { id: "2", title: "Implémenter drag & drop", description: "Utiliser react-dnd", status: "inprogress", createdAt: Date.now(), priority: "high", tags: ["Backend", "Urgent"], assignedTo: "Bob", dueDate: "2025-08-25" },
  { id: "3", title: "Ajouter analytics", description: "Statistiques avancées", status: "done", createdAt: Date.now(), priority: "low", tags: ["Design"], assignedTo: "Charlie" },
]

function TaskCard({ task, moveTask, onEdit, onDelete }: { task: Task; moveTask: (id: string, status: Task["status"]) => void; onEdit: (task: Task) => void; onDelete: (id: string) => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white dark:bg-slate-800 rounded-lg shadow p-4 mb-2 cursor-move border-l-4 ${
        task.status === "todo"
          ? "border-emerald-400"
          : task.status === "inprogress"
          ? "border-yellow-400"
          : "border-blue-400"
      } ${isDragging ? "opacity-50" : ""}`}
    >
      <div className="flex justify-between items-center">
          <div className="font-bold text-lg mb-1">{task.title}</div>
          <span className={`px-2 py-1 rounded text-xs font-bold ${task.priority === "high" ? "bg-red-500 text-white" : task.priority === "medium" ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700"}`}>{task.priority || "low"}</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">{task.description}</div>
        <div className="flex gap-2 flex-wrap mb-2">
          {task.tags?.map(tag => <span key={tag} className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs">{tag}</span>)}
          {task.dueDate && <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Échéance: {task.dueDate}</span>}
          {task.assignedTo && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{task.assignedTo}</span>}
        </div>
        <div className="relative">
          <MenuActions
            onMove={status => moveTask(task.id, status)}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task.id)}
          />
        </div>
      </div>
    );
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [search, setSearch] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)
  const [newTask, setNewTask] = useState<{ title: string; description: string; priority: string; tags: string[]; dueDate: string; assignedTo: string }>({ title: "", description: "", priority: "low", tags: [], dueDate: "", assignedTo: users[0] })
  const [editTask, setEditTask] = useState<Task | null>(null)

  // Drag & drop
  const moveTask = (id: string, status: Task["status"]) => {
    setTasks(tasks => tasks.map(t => (t.id === id ? { ...t, status } : t)))
    setHistory(h => [
      `Tâche ${id} déplacée vers ${status} à ${new Date().toLocaleTimeString()}`,
      ...h,
    ])
  }
  const handleDrop = (id: string, status: Task["status"]) => {
    moveTask(id, status)
    setShowNotif(true)
    setTimeout(() => setShowNotif(false), 1500)
  }
  function addTask() {
    setTasks(ts => [
      {
        id: Math.random().toString(36).slice(2),
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority as any,
        tags: newTask.tags,
        dueDate: newTask.dueDate,
        assignedTo: newTask.assignedTo,
        status: "todo",
        createdAt: Date.now(),
      },
      ...ts,
    ])
    setNewTask({ title: "", description: "", priority: "low", tags: [], dueDate: "", assignedTo: users[0] })
    setHistory(h => [
      `Tâche ajoutée à ${new Date().toLocaleTimeString()}`,
      ...h,
    ])
  }
  function updateTask(updated: Task) {
    setTasks(ts => ts.map(t => (t.id === updated.id ? updated : t)))
    setEditTask(null)
    setHistory(h => [
      `Tâche ${updated.id} modifiée à ${new Date().toLocaleTimeString()}`,
      ...h,
    ])
  }
  function deleteTask(id: string) {
    setTasks(ts => ts.filter(t => t.id !== id))
    setHistory(h => [
      `Tâche ${id} supprimée à ${new Date().toLocaleTimeString()}`,
      ...h,
    ])
  }
  function filterTask(t: Task) {
    if (!search) return true;
    return (
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())))
    );
  }
  function exportTasks() {
    const data = JSON.stringify(tasks);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    a.click();
    setHistory(h => [
      `Export des tâches à ${new Date().toLocaleTimeString()}`,
      ...h,
    ])
  }
  function importTasks() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => {
        try {
          const imported = JSON.parse(evt.target?.result as string);
          setTasks(imported);
          setHistory(h => [
            `Import des tâches à ${new Date().toLocaleTimeString()}`,
            ...h,
          ])
        } catch {}
      };
      reader.readAsText(file);
    };
    input.click();
  }
  function reset() {
    setTasks(initialTasks)
    setHistory([])
  }

  // Analytics
  const stats = {
    todo: tasks.filter(t => t.status === "todo").length,
    inprogress: tasks.filter(t => t.status === "inprogress").length,
    done: tasks.filter(t => t.status === "done").length,
    total: tasks.length,
  }

  // Kanban UI
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full max-w-5xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-emerald-500">Système de gestion de tâches</h2>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button variant="outline" onClick={() => setShowAnalytics(!showAnalytics)}><BarChart2 className="w-4 h-4 mr-1" /> Analytics</Button>
              <Button variant="outline" onClick={reset}><RefreshCcw className="w-4 h-4 mr-1" /> Reset</Button>
              <Button variant="outline" onClick={() => setShowHistory(!showHistory)}>Historique</Button>
              <Button variant="outline" onClick={() => setShowCalendar(!showCalendar)}>Calendrier</Button>
              <Button variant="outline" onClick={exportTasks}>Export</Button>
              <Button variant="outline" onClick={importTasks}>Import</Button>
            </div>
          </div>
        </div>
        {/* Barre de recherche */}
        <div className="mb-4 flex gap-2">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une tâche..." className="px-4 py-2 rounded border w-full" />
        </div>
        {/* Formulaire création tâche */}
        <form className="mb-6 flex flex-wrap gap-2 items-center" onSubmit={e => {e.preventDefault(); addTask();}}>
          <input type="text" value={newTask.title} onChange={e => setNewTask(t => ({ ...t, title: e.target.value }))} placeholder="Titre" className="px-2 py-1 rounded border" required />
          <input type="text" value={newTask.description} onChange={e => setNewTask(t => ({ ...t, description: e.target.value }))} placeholder="Description" className="px-2 py-1 rounded border" />
          <select value={newTask.priority} onChange={e => setNewTask(t => ({ ...t, priority: e.target.value as any }))} className="px-2 py-1 rounded border">
            <option value="low">Faible</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
          <select value={newTask.assignedTo} onChange={e => setNewTask(t => ({ ...t, assignedTo: e.target.value }))} className="px-2 py-1 rounded border">
            {users.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <input type="date" value={newTask.dueDate} onChange={e => setNewTask(t => ({ ...t, dueDate: e.target.value }))} className="px-2 py-1 rounded border" />
          <select multiple value={newTask.tags} onChange={e => setNewTask(t => ({ ...t, tags: Array.from(e.target.selectedOptions, o => o.value) }))} className="px-2 py-1 rounded border">
            {tagsList.map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
          <Button type="submit" variant="outline">Ajouter</Button>
        </form>
        {/* Edition tâche */}
        {editTask && (
          <form className="mb-6 flex flex-wrap gap-2 items-center bg-slate-100 dark:bg-slate-800 p-4 rounded" onSubmit={e => {e.preventDefault(); updateTask(editTask);}}>
            <input type="text" value={editTask.title} onChange={e => setEditTask(t => t ? { ...t, title: e.target.value } : t)} placeholder="Titre" className="px-2 py-1 rounded border" required />
            <input type="text" value={editTask.description} onChange={e => setEditTask(t => t ? { ...t, description: e.target.value } : t)} placeholder="Description" className="px-2 py-1 rounded border" />
            <select value={editTask.priority} onChange={e => setEditTask(t => t ? { ...t, priority: e.target.value as any } : t)} className="px-2 py-1 rounded border">
              <option value="low">Faible</option>
              <option value="medium">Moyenne</option>
              <option value="high">Haute</option>
            </select>
            <select value={editTask.assignedTo} onChange={e => setEditTask(t => t ? { ...t, assignedTo: e.target.value } : t)} className="px-2 py-1 rounded border">
              {users.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <input type="date" value={editTask.dueDate} onChange={e => setEditTask(t => t ? { ...t, dueDate: e.target.value } : t)} className="px-2 py-1 rounded border" />
            <select multiple value={editTask.tags} onChange={e => setEditTask(t => t ? { ...t, tags: Array.from(e.target.selectedOptions, o => o.value) } : t)} className="px-2 py-1 rounded border">
              {tagsList.map(tag => <option key={tag} value={tag}>{tag}</option>)}
            </select>
            <Button type="submit" variant="outline">Valider</Button>
            <Button type="button" variant="outline" onClick={() => setEditTask(null)}>Annuler</Button>
          </form>
        )}
        {/* Kanban columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KanbanColumn status="todo" tasks={tasks.filter(t => t.status === "todo" && filterTask(t))} moveTask={moveTask} onDrop={handleDrop} onEdit={setEditTask} onDelete={deleteTask} />
          <KanbanColumn status="inprogress" tasks={tasks.filter(t => t.status === "inprogress" && filterTask(t))} moveTask={moveTask} onDrop={handleDrop} onEdit={setEditTask} onDelete={deleteTask} />
          <KanbanColumn status="done" tasks={tasks.filter(t => t.status === "done" && filterTask(t))} moveTask={moveTask} onDrop={handleDrop} onEdit={setEditTask} onDelete={deleteTask} />
        </div>
        {/* Analytics, historique, calendrier */}
        {showAnalytics && (
          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow">
            <div className="font-bold mb-2 text-emerald-500">Statistiques</div>
            <div className="flex gap-8 justify-center">
              <div>À faire: <span className="font-bold">{stats.todo}</span></div>
              <div>En cours: <span className="font-bold">{stats.inprogress}</span></div>
              <div>Terminé: <span className="font-bold">{stats.done}</span></div>
              <div>Total: <span className="font-bold">{stats.total}</span></div>
            </div>
            {/* Graphique (placeholder) */}
            <div className="mt-4 h-32 bg-gradient-to-r from-emerald-400 to-blue-400 rounded" />
          </div>
        )}
        {showHistory && (
          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow">
            <div className="font-bold mb-2 text-emerald-500">Historique</div>
            <ul className="text-xs text-gray-500">
              {history.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}
        {showCalendar && (
          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow">
            <div className="font-bold mb-2 text-emerald-500">Calendrier (échéances)</div>
            <ul className="text-xs text-gray-500">
              {tasks.filter(t => t.dueDate).map(t => <li key={t.id}>{t.title} : {t.dueDate}</li>)}
            </ul>
          </div>
        )}
        {showNotif && (
          <div className="fixed top-8 right-8 bg-emerald-500 text-white px-4 py-2 rounded shadow flex items-center gap-2 animate-bounce z-50">
            <Bell className="w-4 h-4" /> Tâche déplacée !
          </div>
        )}
      </div>
    </DndProvider>
  )
}

function KanbanColumn({ status, tasks, moveTask, onDrop, onEdit, onDelete }: { status: Task["status"]; tasks: Task[]; moveTask: any; onDrop: any; onEdit: (task: Task) => void; onDelete: (id: string) => void }) {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: { id: string }) => onDrop(item.id, status),
  }));

  // Use a callback ref to attach drop
  const setDropRef = (node: HTMLDivElement | null) => {
    if (node) {
      drop(node);
    }
  };

  return (
    <div ref={setDropRef} className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-lg p-4 min-h-[200px] mx-2">
      <div className="font-bold mb-2 text-emerald-500 text-center">
        {status === "todo" ? "À faire" : status === "inprogress" ? "En cours" : "Terminé"}
      </div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
