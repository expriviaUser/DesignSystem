export interface MenuItem {
  label: string;
  items: link[];
}

export interface link {
  label: string;
  path: string;
  type: "internal" | "external";
}
