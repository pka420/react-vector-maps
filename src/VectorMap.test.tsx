import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { VectorMap } from './VectorMap';

const args = {
  id: 'new-zealand',
  name: 'New Zealand',
  viewBox: '0 0 494.709 666.062',
  layers: [
    {
      id: 'nz-auk',
      name: 'Auckland',
      d: `M363.63,117.021l1.039-0.08l-0.689,0.82l0.41,1.36l-0.51,1.07l-1.66-1.94l0.92-0.08l-0.11-1.2L363.63,117.021L363.63,117.021z M362.929,112.782l0.891,0.08l0.42,0.66l-0.41,0.71l-0.5-0.28l-1,0.67l0.461,1.46l-0.871,1.5h-0.68l-0.55-0.03l-0.59-0.31l-1.011-0.21l-0.479-0.36l0.351-0.51l-1.4-0.04l0.37-0.59l-1.06-0.77l-1.061,1.04l-0.051-1.98l1.131-0.2l0.09,0.84l1.68-0.91l0.29,0.98l1.23,0.03l0.229-1.08l1.641,0.06L362.929,112.782L362.929,112.782z M353.009,111.802l0.761,0.58l-0.25,2.1l-0.64,0.65l-0.42-0.6l-0.48,0.83l-1.97,0.14l-0.49-0.82l0.44-0.94l2.02-0.07l1-1.04L353.009,111.802L353.009,111.802z M350.06,95.481l1.48,1.16l-0.181,1.92l-0.41-0.67l-1.19,0.45l0.22-0.4l-0.92-0.56L350.06,95.481z M359.939,84.792l0.88,0.64l-0.65,2.39l-1.939-0.57l0.05-1.68L359.939,84.792z M342.069,83.632l3.26,4.8l4,1.46l-0.03,0.72l-1.01,0.64l0.2,0.85l-0.63-0.04l-0.19,0.03l0.39,1.45l0.63-0.17l1.33,1.08l1.14-0.2l-0.84,0.729l-0.97-0.2l-1.24,0.65l-1.84,0.35l-0.52-0.48l0.09,1.74l0.69,0.68l1.2-0.05l-0.12,0.37l-1.24,1.44l-0.75,0.92l0.2-1.98l-0.7-0.38l-0.48,1.02l-0.53,0.77l1.24,0.66l0.15,2.4l-0.88-0.26l0.41,1.08l-0.6,0.03l-0.13,0.63l1.57,2.27l1.27,0.18l0.32-0.96l2.55-0.67l-0.19,1.31l-2.37,0.229l-0.54,0.85l-1.24,0.2l1.4,2.42l-0.54,0.93l1.01,3.51l1.46,2.04l-1.3-0.13l0.52-0.42l-1.11-0.95l-0.95,0.9l-1.66,0.34l-1.38-2.51l0.53-1.05l-1.23,1.18l0.01,0.6l0.11,0.95l0.44,0.45l-0.09,1.82l1.38,1.4l0.46-1.52l0.89,0.09l0.65-0.9l1.66,0.28l0.23,1.03l0.62,0.12l0.44-0.88l2.209,0.03l0.531,1.21l-1.141,1.84l1.811-1.62l0.369-0.08l1.87,1.87l1.16-0.19l-0.3-1.32l2.1-0.35l1.25,1.49l0.41,0.41l0.939,1.57l1.471-0.89l0.689,1.12l1.221-1l2.25,1.33l1.359,2.22l0,0l-0.449,1.06l-2.59,0.74l-1.33-1.09l-0.76,0.28l-0.07,1.88l-2.73-0.31l-0.55-0.86l-1.729,2.22l-0.811,2.68l-1.29-0.05l-0.8-0.77l-0.49,0.71l0.29,0.96l0.38-0.4l0.939,0.98l0.971,2.03l-0.73,1.33l-2.34-0.2l0.541,0.86l-0.631,0.5l-0.09,1.36l-2.61-0.64l-0.09,1.36l-1.61,0.96l0,0l-1.89,1l-0.24-0.43l-0.51,0.51l0.15,1.18l-0.65,0.57l-1.58-1.47l-5.77-13.3l-0.02-1.26l0.98-0.43l1.68,0.31l0.8-0.64l1.24,0.4l0.23,1.21l-0.61,0.81l0.77,1.02l-0.27,1.62l1.09,0.38l0.74,4.16l1.08,0.2l-1.28-3.88l0.9,0.35l0.83,0.23l1.72-0.271l-3.39-0.58l-0.61-0.71l1.97-0.58l1.39-1.79l0.71,0.13l-0.14,0.92l2.39-2.63l1,0.6l0.729-0.37l0.21,0.76l1.09-0.89l-0.939-0.69l-0.69,0.72l-0.579-0.17l-0.571-0.2l-1.64-1.99l-1.97,0.43l0.32-0.49l-1.24-0.8l1.29-1.16l-0.72-1.36l1.3-0.27l1.11,0.67l0.44-0.73l-1.51-0.26l-0.71-0.19l-1.65,0.71l-0.91-0.61l-0.99,0.37l-1.88,2.19l-0.54-0.33l-0.62,1.4l0.32,0.94l-1.49-0.47l-0.25-0.57l-0.38,1.1l-1.78,1.3l-1,0.06l-0.74-4.9l-1.49-3.39l-0.47-3.38l-5-8.68l-4.92-7.06l0.27-1.73l1.26-0.66l1.34-0.32l2.6,4.8l2.93,1.79l-0.48,1.78l0.43,0.23l1.04,0.96l1.28-0.74l0.17-0.65l-1.23-0.62l0.44-0.99l0.93-0.43l-1.48-3.78l0.87-2.79l-1.4-1.3l-0.33,0.68l-1.04,0.28l-1.24-1.32l-0.43,0.49l-1.35-0.11l-1.13-0.74l0.64-3.13l0.6-0.37l2.3,1.06l2-0.81l0.25-1.03l0,0l2.15-1.76l0.54,0.38l0.39-1.41l2.02-0.75l0.12-1.34l2-0.76l0.1-1.34l1.32-1.02l0,0L342.069,83.632L342.069,83.632z M371.829,79.212l0.641,0.44l-0.35,1.48l0.639-0.37l0.131,0.99l0.8,0.08l-0.819,0.48l0.149,1.1l0.34,0.07l2.66,1.48l-0.851,0.94l0.141,1.56l-0.68,0.33l0.799,1.59l0.74-0.01l1.33,1.38l0.291,1.08l-1.08,1.67l-1.971-0.87l0.221-0.63l0.58,0.15l-0.24-0.96l-1.09,0.55l-1.061-0.2l0.24-2.31l-1.45,0.38l-0.271-0.78l-0.549,0.07l-1.881-1.55l-0.5,0.68l-0.4-1.12l-0.029-1.28l0.71,0.13l0.42,0.86l0.83,0.01l-0.45-1l0.18-0.81l-0.49-0.52l0.621-0.39l-1.78-0.56l0.19-0.67l0.52,0.47l1.84-0.69l-1.37-1.16l0.07-1.25L371.829,79.212L371.829,79.212z`,
    },
    {
      id: 'nz-wgn',
      name: 'Wellington',
      d: `M354.179,315.762l0.341,0.35l-0.771,1.29l-1.84,1.811l-0.7-0.13l1.94-3.32H354.179z M361.509,309.781l1.311,0.141l0.05,0.54l1.4,0.569l0.05,0.54l-0.93,0.091l0.21,0.76l1.239,0.35l0.621-0.529l1.14,0.67l1.67-0.94l1.51,0.24l0.16-1.19l0.78-0.31l0.88,0.78l1.77,0.14l1.261-2.48l5.84,3.021l1.31-0.53l0.32-0.97l0.84,0.229l-0.05-0.55l0,0l0.32-0.979l0,0l1.879-0.19l0.73,0.55l0.37-0.43l0.729,0.55l-0.369,0.43l0.57,0.33l-1,2.381l1.67,0.46l0.729-0.86l0.569,0.33l0.371-0.43l0.89,0.77l1.521-1.18l0.889,0.77l0.421-1.3l1.2-0.2l-0.211-0.76l1.101,0.12l0.58-1.08l1.149,0.67l1.621-0.09l-0.311-0.44l0.42,0.11l0.109-1.74l1.671,0.46l0.78-0.31l0.779,1.1l2.34,0.48l0.57,1.76l0.99,0.46l-0.46,0.75l0.25,0.82l0,0l-0.341,2.189l-1.439,2.851l0.23,1.229l-3.28,2.9l-0.69,2.33l-0.74,0.56l-0.229,2.12l-1.16,1.9l-0.05,1.479l-2.83,2.87l-1.3,3.439l-3.25,1.62l-0.7,2.101l-2.01,2.3l-5.27,2.74l-3.521,3.81l-3.04,1.19l-0.38,0.939l-2.57,2.3l-2.521-0.02l-1.75,1.92l-1.239,0.25l-1.37-0.59l-0.811,0.25l-0.66-3.5l-0.92-0.73l1.07-3.76l-0.189-1.09l-2.811-1.76l0.01-1.561l-1.459,0.75l-2.551-0.479l-2.07,1.04l-2.76,2.39l-0.649-1.09l-1.33-0.43l0.33-1.181l-1.09-1.479l2.51-5.21l-0.97-1.391l-1.25-0.3l-2.67,2.16l-0.27,1.03l0.96-0.05l-0.12,1.51l0.93-1.58l0.45,0.53l-0.34,1.029l0.44,0.92l-0.73,0.7l-0.77-0.939l-1.29,1.16l-0.9-0.19l-1.12,0.88l-0.84-0.89l-1.42-0.2l-1.78-2.93l1.22-2.511l2.7-0.93l1.03-2.45l0.83-0.29l1.71-2.85l1.17-0.2l0.58-0.96l0.57,0.59l-0.91,0.92l0.09,0.681l0.68-0.78l0.29-1.54l-1.11-1.14l0.31-0.761l3.631-2.529l1.149-2.28l0.58-3.75l2.97-2.92L361.509,309.781L361.509,309.781z`,
    },
    {
      id: 'nz-can',
      name: 'Canterbury',
      d: `M267.81,381.981l0.4,1.58l-0.33,0.99l0.62,0.92l1.11,0.16l0.91-0.63l0.57,0.359l0.09,1.12l1.06-0.399l0.31,0.46l-0.75,0.859l0.13,1.69l0.47,0.689l1.1,0.16l0.04,0.561l-0.81,1.76l1.04,1.05l1.59-0.61l0.62,0.921l-0.33,1l1.15,0.72l-0.33,1l1.31,0.95l1.37,0.06l-0.53,0.2l-1.03,2.43l0,0l1.1,0.16l0,0l0.79-0.31l0.89,0.819l-0.33,1l0.73,0.591l0.79-0.311l0.17-1.229l3.22-0.66l0.28-1.561l1.32-0.5l0.96-1.529l-0.09-1.12l0.94-0.07l-2.61-0.45l0.22-0.66l0.94-0.069l0.06-0.891l3.58-2.52l-0.2-0.79l1.72-0.37l0.22-0.66l0.05,0.561l0.68,0.029l0.06-0.89l2.09-0.8l0.57,0.359l0.21-0.66l1.04-0.399l-0.2-0.79l0.94-0.07l-0.9-2.84l0.89-0.64l-0.09-1.12l1-0.97l1.35,0.05l0.91-2.101l1.3-0.51l0.06-0.9l1.5,0.28l0.69-1.439l2.18-1.17l-0.2-0.79l0.79-1.78l1.08,0.14l1.1,2.17l1.1-1.33l5.27-1.05l0.76,1.141l3.25-0.21l-0.41,1.89l0,0l-4.38,6.34l-0.56,1.99l0.45,2.29l-1.81,1.069l-3.23,3.98l-1.64,0.9l-0.63,0.84l0.04,1.14l-2.21,2.09l-0.34,2.41l1.49,1.05l-1.28,0.63l-0.73-1.229l-2.06,0.41l-3.49,3.02l-1.11,3.46l0.82,0.45l-1.69,2.13l-4.28,10.86l-2.12,2.75l0.2,1.78l-3,3.68l-4.01,1.89l-2.27,3.29l-1.51-0.21l-1.91,1.351l-4.16,1.39l-1.67,1.79l-0.97,0.04l-1.61,2.35l-1.97,4.59l-0.63,6.931l0.33,4.1l1.29,4.63l-0.24,0.28l-0.72-1.9l-0.96,1.49l1.31,0.08l0.31,0.561l1.24,0.18l0.07,0.75l1.2,0.24l-3.32,1.22l-1.75-0.13l-1.06,0.79l0.34,1.76l0.43,0.4l0.48-1.45l0.25,1.029l0.63-0.18l0.48-1.479l0.96-0.12l0.4,0.819l0.89-1.189l0.22,0.37l1.75-1.011l-0.58,2.921l0.4,0.27l1.52-3.28l0.88,0.891l0.37-0.25l0.76,0.51l-1.01,2.61l0.26,0.84l1.52-3.5l0.62,0.88l0.56-0.271l0.62-0.06l0.64,0.42l-0.13,1.04l0.09,0.84l1.08-1.18l1.03-0.09l-0.48,0.5l1.16,0.899l-0.29,0.79l0.76,0.36l0.41-0.83l0.89,0.91l-0.45,1.06l0.83,0.391l0.4,1.08l-0.05,1.609l-0.62,1.21l-0.65,0.351l0.25,1.46l-0.8,0.149l-0.16,0.91l-0.83-0.83l-0.73,1.92l-2.72,0.79l-0.02-0.72l-1.15-1.12l0.24-1.84l0.95-0.97l-0.79-0.061l-0.27-0.67l0.93-0.25l-0.12-0.96l-0.79-0.09l-0.34-0.7l-0.88,0.67l0.35,2.42l-0.64,0.811l0.25,1.83l1.28,1.39l0.03,0.94l-1.4-0.521l-0.93,0.45l-1.05-0.58l-1.26,0.1l-0.52-0.54l-0.39-0.909l-0.8,0.33l-0.91-0.931l-0.69-1.08l-1.37-0.27l-15.39,2.229l-12.13,5.49l-13.99,8.12l-7.87,5.621l-4.2,3.91l-3.29,4.529l0.68,0.689l-0.25,2.99l-2.3,4.16l-1.33,4.119l0.41,12.602l-1.02,5.869l0,0l-1.19-0.459l-1.5,0.289l-2.28-0.949l-0.8,0.33l-0.9-0.881l-1.65,0.061l-1.59-0.9l-1.23,0.189l-0.05-0.6l-2.67-0.48l-7.61-3.459l-1.79,1.949l-0.51,2.371l-0.43-0.141l-0.6,1.17l-2.15,0.85l-0.76,0.92l-0.58-0.391l-1.46,0.881l-0.9-0.881l0.02-1.559l-1.12-0.18l-0.76,0.92l-1.51,0.279l-0.32-0.49l-1.3,1.131l-4.85,0.34l-0.2-0.85l-0.86-0.281l0.65-0.559l-0.52-1.342l-1.6-0.92l-1.31-2.58l0.18-1.299l-2.15-8.1l-1.99-0.461l-2.12,1.43l-2.89-1.35l-1.17-4.459l-0.66,0.559l-0.02,1.541l-2.96-0.4l0.75-3.041l-0.95-1.479l0.73-1.5l-0.2-0.84l-1.99-0.471l-0.81,0.311l-1.33-1.021l0.66-0.549l-0.47-0.74l0.89-1.25l-0.63-0.98l0.66-0.549l-0.2-0.84l0.66-0.551l-0.31-0.49l0,0l-0.36-1.08l0,0l0.54-0.199l0.05-3.061l-1.57-2.44l0.81-0.3l0.3-1.63l1.47-0.851l-0.31-0.49l0.93-0.649l-0.2-0.83l0.97-0.06l-0.09-1.171l0.81-0.3l-0.2-0.83l0.81-0.3l0.3-1.62l1.24-0.16l-0.58-3.989l0,0l0.81-0.3l0.72-1.471l0.7,0.04l0.41-1.95l2.65-1.6l0.83-1.81l1.39,0.069l-0.09-1.16l1.61-0.609l0.22-0.681l1.12,0.171l-0.09-1.16l0.65-0.55l-0.47-0.721l1.23-0.17l1.02-0.99l-0.04-2.09l2.24-1.17l0.44-1.37l-0.46-2.22l2.02-0.48l0.44-1.359l0,0l1.22-0.17l0,0l1.72-2.45l1.65-0.04l2.2-1.73l0.95,1.421l1.88-0.721l0.98-1.56l1.23-0.181l0.44-1.359l1.88-0.72l0.49-0.78l0.48,0.71l1.24-0.18l0.21,0.81l1.24-0.18l0.06-0.92l1.68-1.54l-0.63-0.94l1.03-0.99l1.78-0.39l-0.52-1.28l2.1,0.09l1.58-1.199l0.32,0.47l0.81-0.311l0.07-0.92l1.78-0.39l0.02-1.49l0.81-0.31l1.38-2.01l0.86,0.27l-0.07,0.92l1.51-0.28l1.26-1.67l0.07-0.91l1.35-0.52l-0.63-0.94l1.19-0.75l-0.2-0.81l0.81-0.31l-0.31-0.471l1.01,0.5l0.65-0.55l-0.2-0.81l0.81-0.311l0.31,0.47l1.58-1.199l0.58,0.37l1.08-0.41l-0.09-1.15l0.92-0.649l0,0l-0.4-1.62l0,0l3.04-2.051l-0.43-0.13l0.23-0.68l1.39,0.06l0.92-0.649l1.28,0.39l-0.22,0.681l0.54-0.211l1.3-1.09l-0.31-0.47l0.5-0.78l0.85,0.261l1.03-0.99l0.9,0.84l2.84-0.81l1.01,0.5l1.99-1.07l1.05,1.07l0.81-0.311l1.41-1.43l-0.74-0.601l0.23-0.68l1.07-0.42l-0.06-2.63l2.19-0.26l1.19-0.75l0.34-1.021l1.23-0.18l-0.13-1.72l1.3-1.091l0.29-1.59l2.14-0.83l-0.2-0.81l0,0l1.76-0.39l0,0l0.58,0.359l2.67-1.03l-0.31-0.47l0.53-0.21l-0.31-0.47l0.82-1.79l2.25-1.16l0.02-1.48l1.94-1.63l0.18-1.239l2.02-0.49l2.38-2.96l2.13-0.82l0.58,0.36l1.18-0.74l0.09-2.37l0.69,0.03l-0.09-1.13l0.87-1.2l-0.31-0.46l0,0l1.75-0.38l1.46-2.3l1.86-0.71l0.49-0.761l-0.29-1.92l1.28-1.06l-0.4-1.58l1.86-0.7l0.2,0.79L267.81,381.981L267.81,381.981z`,
    },
  ],
};

describe('VectorMap', () => {
  afterEach(() => cleanup());

  it('should render', () => {
    const { container } = render(<VectorMap {...args} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should throw and error without a layers prop', () => {
    const spy = jest.spyOn(console, 'error');

    render(<VectorMap {...args} layers={undefined as never} />);

    expect(spy).toHaveBeenCalledWith(
      `[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`,
    );
  });

  it('should throw and error without an empty layers array', () => {
    const spy = jest.spyOn(console, 'error');

    render(<VectorMap {...args} layers={[]} />);

    expect(spy).toHaveBeenCalledWith(
      `[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`,
    );
  });

  it(`should add 'aria-checked' to a layer when it's id is 'checked'`, () => {
    const { container } = render(<VectorMap {...args} checkedLayers={['nz-auk']} />);

    expect(container.querySelector('[aria-checked="true"]')?.id).toEqual('nz-auk');
  });

  it(`should add 'aria-current' to a layer when it's id is 'current'`, () => {
    const { container } = render(<VectorMap {...args} currentLayers={['nz-auk']} />);

    expect(container.querySelector('[aria-current="true"]')?.id).toEqual('nz-auk');
  });
});
