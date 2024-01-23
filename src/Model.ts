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
  harga: string;
  date_created: string;


  constructor(id: string, label: string, harga: string, date_created: string) {
    this.id = id;
    this.label = label;
    this.harga = harga;
    this.date_created = date_created;
  }
}

export { PsMenu, PsSnack };