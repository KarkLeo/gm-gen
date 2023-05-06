import { IEventFocus } from "./types/eventFocus";

export const getRollEventFocus = (
  roll: number,
  eventFocuses: IEventFocus[]
): IEventFocus | null =>
  eventFocuses.find((focus) => roll >= focus.min && roll <= focus.max) || null;
