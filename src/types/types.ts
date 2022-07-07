export interface ActionsType {
  id: number,
  oguid: string,
  status: string,
  order_type: {
    name: string,
    oguid: string,
  },
  terminal: {
    name: string,
    oguid: string,
  },
  account: {
    name: string,
    oguid: string,
  },
  created_user: {
    surname: string,
    name: string,
    patronymic: string,
    oguid: string,
  },
  created_date: number,
}

export const StatusColors = {
  new: "#61C2E0",
  completed: "#E06561",
  assigned_to: "#F8BC48",
  started: "#53bb36",
  declined: "#49105b",
};

export type StatusTypes = "new" | "completed" | "assigned_to" | "started" | "declined";
