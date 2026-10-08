import React from "react";

interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  options?: { label: string; value: string }[];
  helperText?: string;
  rows?: number;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  options = [],
  helperText,
  rows = 4,
  className = "",
}) => {
  const inputBaseStyles =
    "w-full rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#FF7E2C] focus:ring-2 focus:ring-[#FF7E2C]/20 focus:outline-none transition-all placeholder:text-gray-400 px-4";

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${inputBaseStyles} py-3`}
        />
      ) : type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputBaseStyles} h-12 cursor-pointer`}
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${inputBaseStyles} h-12`}
        />
      )}

      {helperText && <p className="text-xs text-gray-400">{helperText}</p>}
    </div>
  );
};
