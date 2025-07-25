import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUserAccount(): Promise<any> {
    // Simulate a DB call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          address: '123 Main St, Anytown, USA',
        });
      }, 1000); // 1 second delay
    });
  }

  createUserAccount(data: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...data, id: 1 });
      }, 1000);
    });
  }
}
