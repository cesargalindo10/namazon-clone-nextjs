import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdeServiceBase } from "./base/orde.service.base";

@Injectable()
export class OrdeService extends OrdeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
