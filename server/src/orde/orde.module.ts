import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrdeModuleBase } from "./base/orde.module.base";
import { OrdeService } from "./orde.service";
import { OrdeController } from "./orde.controller";
import { OrdeResolver } from "./orde.resolver";

@Module({
  imports: [OrdeModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrdeController],
  providers: [OrdeService, OrdeResolver],
  exports: [OrdeService],
})
export class OrdeModule {}
