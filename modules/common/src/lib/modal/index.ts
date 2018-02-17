import { BootstrapModalComponent } from './bootstrap-modal';
import { ModalShowButton, ModalHideButton, ModalToggleButton } from './shared';
import { ModalComponent } from './modal.component';

export { Modal, ModalShowButton, ModalHideButton, ModalToggleButton } from './shared';
export { BootstrapModalComponent } from './bootstrap-modal';
export { ModalComponent } from './modal.component';

export const MODAL_DIRECTIVES = [ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton];

export const BOOTSTRAP_MODAL_DIRECTIVES = [BootstrapModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton];