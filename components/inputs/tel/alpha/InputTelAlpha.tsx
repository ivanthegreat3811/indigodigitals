import { CSSProperties, useState } from 'react';
import defaultStyleSheet from './InputTelAlphaCSS/InputTelAlpha.module.css';

export interface IInputTelAlpha {
  style?: CSSProperties;
  className?: string;
  isFocus?: boolean;
  fieldName?: string;
  isRequired?: boolean;

  //sampleTextProp?: string | null;
}

const InputTelAlpha: React.FC<IInputTelAlpha> = ({ style, className, isFocus, fieldName, isRequired = false }) => {
  const [isComponentFocus, setIsComponentFocus] = useState<boolean>(isFocus || false);
  const [isComponentFullfilled, setIsComponentFullfilled] = useState<boolean>(false);
  const handleComponentFocus = () => {
    setIsComponentFocus(true);
  };
  const handleComponentBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsComponentFocus(false);
    if (event.target.value) setIsComponentFullfilled(true);
    else setIsComponentFullfilled(false);
  };
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <label className={defaultStyleSheet.label}>
          <span
            className={`${defaultStyleSheet.field} ${isComponentFocus && defaultStyleSheet.isFocus} 
            ${isComponentFullfilled && !isComponentFocus && defaultStyleSheet.isBlurAndFullfilled}`}>
            {fieldName || '###fieldName'}
            {isRequired && <span className={defaultStyleSheet.isRequired}>*</span>}
          </span>
          <input
            onFocus={handleComponentFocus}
            onBlur={handleComponentBlur}
            className={`${defaultStyleSheet.input} ${isComponentFocus && defaultStyleSheet.isFocus}`}
            type="tel"
          />
        </label>
      </div>
    </div>
  );
};

export default InputTelAlpha;
