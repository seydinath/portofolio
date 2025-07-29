"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreditCardForm() {
  const [cardData, setCardData] = useState({
    number: "",
    holder: "",
    month: "",
    year: "",
    cvv: "",
  })
  const [isFlipped, setIsFlipped] = useState(false)
  const [focusedField, setFocusedField] = useState("")

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const handleInputChange = (field: string, value: string) => {
    if (field === "number") {
      value = formatCardNumber(value)
    }
    setCardData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
    if (field === "cvv") {
      setIsFlipped(true)
    } else {
      setIsFlipped(false)
    }
  }

  const handleBlur = () => {
    setFocusedField("")
    setIsFlipped(false)
  }

  const getCardType = (number: string) => {
    const firstDigit = number.charAt(0)
    if (firstDigit === "4") return "visa"
    if (firstDigit === "5") return "mastercard"
    return "default"
  }

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0")
    return { value: month, label: month }
  })

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => {
    const year = currentYear + i
    return { value: year.toString(), label: year.toString() }
  })

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-slate-900 to-black rounded-2xl">
      {/* Credit Card */}
      <div className="relative mb-8 h-56 perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of Card */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <Card className="w-full h-full bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col justify-between text-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>

                {/* Card Logo */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="text-lg font-bold">CreditCard</div>
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-80 -ml-3"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-10">
                  <div
                    className={`text-2xl font-mono tracking-wider transition-all duration-300 ${
                      focusedField === "number" ? "text-yellow-300 scale-105" : ""
                    }`}
                  >
                    {cardData.number || "#### #### #### ####"}
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <div className="text-xs opacity-80 uppercase">Card Holder</div>
                    <div
                      className={`font-semibold transition-all duration-300 ${
                        focusedField === "holder" ? "text-yellow-300 scale-105" : ""
                      }`}
                    >
                      {cardData.holder || "NAME ON CARD"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80 uppercase">Expires</div>
                    <div
                      className={`font-semibold transition-all duration-300 ${
                        focusedField === "month" || focusedField === "year" ? "text-yellow-300 scale-105" : ""
                      }`}
                    >
                      {cardData.month && cardData.year ? `${cardData.month}/${cardData.year.slice(-2)}` : "MM/YY"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <Card className="w-full h-full bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 border-0 shadow-2xl">
              <CardContent className="p-0 h-full flex flex-col justify-center text-white">
                {/* Magnetic Strip */}
                <div className="w-full h-12 bg-black mb-4"></div>

                {/* CVV Section */}
                <div className="px-6">
                  <div className="bg-white h-8 rounded flex items-center justify-end px-2 mb-2">
                    <span className="text-black font-mono text-sm">{cardData.cvv || "***"}</span>
                  </div>
                  <div className="text-xs opacity-80">CVV</div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="cardNumber" className="text-white mb-2 block">
            Card Number
          </Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardData.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
            onFocus={() => handleFocus("number")}
            onBlur={handleBlur}
            maxLength={19}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
          />
        </div>

        <div>
          <Label htmlFor="cardHolder" className="text-white mb-2 block">
            Card Holder
          </Label>
          <Input
            id="cardHolder"
            type="text"
            placeholder="John Doe"
            value={cardData.holder}
            onChange={(e) => handleInputChange("holder", e.target.value.toUpperCase())}
            onFocus={() => handleFocus("holder")}
            onBlur={handleBlur}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="month" className="text-white mb-2 block">
              Month
            </Label>
            <Select
              value={cardData.month}
              onValueChange={(value) => handleInputChange("month", value)}
              onOpenChange={(open) => open && handleFocus("month")}
            >
              <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-purple-400 focus:ring-purple-400/20">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="year" className="text-white mb-2 block">
              Year
            </Label>
            <Select
              value={cardData.year}
              onValueChange={(value) => handleInputChange("year", value)}
              onOpenChange={(open) => open && handleFocus("year")}
            >
              <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-purple-400 focus:ring-purple-400/20">
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="cvv" className="text-white mb-2 block">
              CVV
            </Label>
            <Input
              id="cvv"
              type="text"
              placeholder="123"
              value={cardData.cvv}
              onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ""))}
              onFocus={() => handleFocus("cvv")}
              onBlur={handleBlur}
              maxLength={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
