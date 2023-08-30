import { defineStore } from "pinia";
import { getApiList } from "@/server";
import type { Children, ChinaAdd, ChinaTotal, RootObject } from "./type";

export const useStore = defineStore("counter", {
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    cityTotal: <Children[]>[],
  }),

  actions: {
    async getList() {
      const result = await getApiList();
      this.list = result;
      console.log(this.list);
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd;
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal;
      this.cityTotal = this.list.diseaseh5Shelf.areaTree[0].children.slice(
        0,
        10
      );
    },
  },
});
