export interface KonyvTipus {
  readonly id: number
  cim: string
  szerzo: string
  ar: number
  db: number
}

export const KONYVLISTA: KonyvTipus[] = [
  { id: 1, cim: "A Pál utcai fiúk", szerzo: "Molnár Ferenc", ar: 3490, db: 12 },
  { id: 2, cim: "Egri csillagok", szerzo: "Gárdonyi Géza", ar: 3990, db: 8 },
  { id: 3, cim: "Az ember tragédiája", szerzo: "Madách Imre", ar: 2990, db: 15 },
  { id: 4, cim: "Légy jó mindhalálig", szerzo: "Móricz Zsigmond", ar: 3290, db: 6 },
  { id: 5, cim: "Abigél", szerzo: "Szabó Magda", ar: 4490, db: 10 },
  { id: 6, cim: "A gyertyák csonkig égnek", szerzo: "Márai Sándor", ar: 4290, db: 7 },
  { id: 7, cim: "Sorstalanság", szerzo: "Kertész Imre", ar: 4690, db: 5 },
  { id: 8, cim: "Tüskevár", szerzo: "Fekete István", ar: 3790, db: 11 },
  { id: 9, cim: "Utas és holdvilág", szerzo: "Szerb Antal", ar: 4190, db: 9 },
  { id: 10, cim: "A kőszívű ember fiai", szerzo: "Jókai Mór", ar: 3890, db: 4 },
];
