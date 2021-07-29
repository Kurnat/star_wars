import {TestService} from "./test.service";
import {CheckService} from "./check.service";
import {TestBed} from "@angular/core/testing";

describe('Simple test', () => {
  let test: TestService

  const faceCheckValue = {check: () => true}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService,
        {provide: CheckService, useValue: faceCheckValue}]
    })

    test = TestBed.inject(TestService)
  })

  xit('повинен створити екземпляр тесту', () => {
    expect(test).toBeTruthy()
  })

  it('повинен додати числа', () => {
    const sum = test.sum(1, 2)
    expect(sum).toBe(3)
  })

  it('повинен додати повернути undefined', () => {
    const sum = test.sum(1)

    expect(sum).toBeUndefined()
  })

})
