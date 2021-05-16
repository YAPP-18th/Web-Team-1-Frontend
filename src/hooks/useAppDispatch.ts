import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../slices';

export const useAppDispatch = () => useDispatch<AppDispatch>();
