import './components/FlexBox';
import { ContainerCompositor } from './ContainerCompositor';

(window as unknown as Record<string, unknown>).ContainerCompositor ??= new ContainerCompositor();
