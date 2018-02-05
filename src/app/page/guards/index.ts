import { PrivatePagesGuard } from './private-pages.guard';
import { MenusGuard } from './menus.guard';

export const guards: any[] = [
    PrivatePagesGuard,
    MenusGuard,
];

export * from './private-pages.guard';
export * from './menus.guard';