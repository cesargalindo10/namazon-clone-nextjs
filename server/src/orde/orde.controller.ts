import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrdeService } from "./orde.service";
import { OrdeControllerBase } from "./base/orde.controller.base";

@swagger.ApiTags("ordes")
@common.Controller("ordes")
export class OrdeController extends OrdeControllerBase {
  constructor(
    protected readonly service: OrdeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
