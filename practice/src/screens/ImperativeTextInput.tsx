import React, {forwardRef, useImperativeHandle} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {TextInput as RNTextInput} from 'react-native';

export type TextInputMethods = {
  focus: () => void;
  dismiss: () => void;
};

export type ImperativeTextInputProps = ComponentProps<typeof RNTextInput>;

const ImperativeTextInput: ForwardRefRenderFunction<
  TextInputMethods,
  ImperativeTextInputProps
> = (props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {},
      dismiss: () => {},
    }),
    [],
  );
  return <RNTextInput {...props} />
};

export default forwardRef(ImperativeTextInput)
