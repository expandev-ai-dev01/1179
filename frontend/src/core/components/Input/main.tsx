/**
 * @component Input
 * @summary Reusable input component with label and error handling
 * @domain core
 * @type ui-component
 * @category form
 */

import { forwardRef } from 'react';
import { getInputClassName } from './variants';
import type { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      disabled = false,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={getInputClassName({ error: !!error, disabled, fullWidth, className })}
          {...props}
        />
        {(error || helperText) && (
          <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
