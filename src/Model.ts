class PsMenu {
  id: string;
  label: string;
  harga: string;

  constructor(id: string, label: string, harga: string) {
    this.id = id;
    this.label = label;
    this.harga = harga;
  }
}

class PsSnack {
  id: string;
  label: string;
  harga: number;
  date_created: string;

  constructor(id: string, label: string, harga: number, date_created: string) {
    this.id = id;
    this.label = label;
    this.harga = harga;
    this.date_created = date_created;
  }
}

class PsSnackUnit {
  id_snack: string;
  id: string;
  label: string;
  harga: number;
  date_created: string;
  unit: number;
  in_unit: number;
  out_unit: number;
  harga_total: number;

  constructor(id_snack: string, unit: number, id: string, label: string, harga: number, date_created: string, in_unit: number, out_unit: number, harga_total: number) {
    this.id = id;
    this.label = label;
    this.harga = harga;
    this.date_created = date_created;
    this.id_snack = id_snack;
    this.unit = unit;
    this.in_unit = in_unit;
    this.out_unit = out_unit;
    this.harga_total = harga_total;
  }
}

export { PsMenu, PsSnack, PsSnackUnit };