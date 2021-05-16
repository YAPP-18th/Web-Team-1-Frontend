import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../slices';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
