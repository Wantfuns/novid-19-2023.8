import express, { Express, Router, Request, Response, response } from "express";

//调用本地json数据代替腾讯的疫情数据接口
const fs = require("fs");

const app: Express = express();
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
//路由
const router: Router = express.Router();
// 注册
app.use("/api", router);

////////////////////////
// 代替方案--自建一个api
// 顶级代码--置顶后不用重复调用里面的文件
const data = fs.readFileSync(`${__dirname}/COVID-19.json`, "utf-8");
router.get("/list", async (req: Request, res: Response) => {
  res.end(data);
});
app.listen(3333, () => {
  console.log("sucess server http://localhost:3333");
});
