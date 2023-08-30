export interface ChinaTotal {
  confirm: number;
  heal: number;
  dead: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
  importedCase: number;
  noInfect: number;
}

export interface ChinaAdd {
  confirm: number;
  heal: number;
  dead: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
  importedCase: number;
  noInfect: number;
}

export interface ShowAddSwitch {
  all: boolean;
  confirm: boolean;
  suspect: boolean;
  dead: boolean;
  heal: boolean;
  nowConfirm: boolean;
  nowSevere: boolean;
  importedCase: boolean;
  noInfect: boolean;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  suspect: number;
  dead: number;
  deadRate: string;
  showRate: boolean;
  heal: number;
  healRate: string;
  showHeal: boolean;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  suspect: number;
  dead: number;
  deadRate: string;
  showRate: boolean;
  heal: number;
  healRate: string;
  showHeal: boolean;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  suspect: number;
  dead: number;
  deadRate: string;
  showRate: boolean;
  heal: number;
  healRate: string;
  showHeal: boolean;
}

export interface Children {
  name: string;
  today: Today;
  total: Total;
}

export interface Children {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface AreaTree {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface Diseaseh5Shelf {
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
}
