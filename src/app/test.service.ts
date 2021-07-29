import {Injectable} from "@angular/core";
import {CheckService} from "./check.service";

@Injectable()
export class TestService {

  constructor(private checkService: CheckService) {
  }
  sum(a: number, b?: number): number | undefined {
    return b ? a + b : undefined
  }

  check(): boolean {
    return this.checkService.check()
  }
}
