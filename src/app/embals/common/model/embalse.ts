export class Embalse {
  alt_cimien: number;
  cauce: string;
  ccaa: string;
  codigo: string;
  cota_coron: number;
  demarc: string;
  embalse: string;
  informe: string;
  links: string[];
  nombre: string;
  provincia: string;
  tipo: string;
  x: number;
  y: number;

  constructor(data: any) {
    this.alt_cimien = data.alt_cimien;
    this.cauce = data.cauce;
    this.ccaa = data.ccaa;
    this.codigo = data.codigo;
    this.cota_coron = data.cota_coron;
    this.demarc = data.demarc;
    this.embalse = data.embalse;
    this.informe = data.informe;
    this.links = data.links || [];
    this.nombre = data.nombre;
    this.provincia = data.provincia;
    this.tipo = data.tipo;
    this.x = data.x;
    this.y = data.y;
  }
}
