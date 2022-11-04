import c from './FormControl.module.css'
import React from "react";

export const Error: React.FC<{ error?: string }> = ({error}) => (
    <div className={c.inputError}>Error: {error}</div>
)