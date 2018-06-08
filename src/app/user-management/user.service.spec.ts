import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import {User} from './user';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('Service should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
  it('should have getUser function', inject([UserService], (service: UserService) => {
    expect(service.getUser).toBeTruthy();
  }));
  it('should have addUser function', inject([UserService], (service: UserService) => {
    expect(service.addUser).toBeTruthy();
  }));
  it('should have deleteUser function', inject([UserService], (service: UserService) => {
    expect(service.deleteUser).toBeTruthy();
  }));
});
