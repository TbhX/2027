"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Banknote } from "lucide-react";
import { useState } from "react";

export type PaymentOption = "full" | "split" | "cash";

interface PaymentOptionsProps {
  selectedOption: PaymentOption;
  onSelect: (option: PaymentOption) => void;
}

export function PaymentOptions({ selectedOption, onSelect }: PaymentOptionsProps) {
  const options = [
    {
      id: "full" as const,
      title: "Paiement Intégral",
      description: "Payez la totalité en une fois",
      icon: CreditCard,
      price: "1000€",
      details: "Paiement unique"
    },
    {
      id: "split" as const,
      title: "Paiement 80-20",
      description: "Divisez le paiement en deux parties",
      icon: Wallet,
      price: "800€ + 200€",
      details: "80% initial, 20% à la livraison"
    },
    {
      id: "cash" as const,
      title: "Paiement en Espèces",
      description: "Payez en espèces en personne",
      icon: Banknote,
      price: "1000€",
      details: "En espèces uniquement"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {options.map((option) => {
        const isSelected = selectedOption === option.id;
        return (
          <Card
            key={option.id}
            className={`relative p-6 cursor-pointer transition-all duration-200 ${
              isSelected
                ? "bg-blue-900/30 border-blue-500"
                : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
            }`}
            onClick={() => onSelect(option.id)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <option.icon className={`w-12 h-12 ${
                isSelected ? "text-blue-400" : "text-gray-400"
              }`} />
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p className="text-gray-400 text-sm">{option.description}</p>
              <div className="text-2xl font-bold text-blue-400">{option.price}</div>
              <p className="text-sm text-gray-500">{option.details}</p>
            </div>
            {isSelected && (
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none" />
            )}
          </Card>
        );
      })}
    </div>
  );
}