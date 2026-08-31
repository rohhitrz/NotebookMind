import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";

export const sourceRoutes= Router({mergeParams:true})

sourceRoutes.get("/", asyncHandler(listSources));
sourceRoutes.get("/", asyncHandler(createSource));
sourceRoutes.post("/bulk-delete", asyncHandler(bulkDeleteSource))
sourceRoutes.get("/:sourceId", asyncHandler(getSource));
sourceRoutes.delete("/:sourceId", asyncHandler(deleteSource));