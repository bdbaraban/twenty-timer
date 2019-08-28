import { ReactElement } from 'react';
import {
  render,
  RenderOptions,
  RenderResult
} from '@testing-library/react-native';
import { StoreProvider } from '../../store';

// Wrap render method with MobX store
const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, { wrapper: StoreProvider, ...options });
};

// re-export everything
export * from '@testing-library/react-native';

// re-export render override
export { customRender as render };
