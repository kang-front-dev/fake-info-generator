import { faker } from '@faker-js/faker';

export function generateFakeInfo(locale: string) {
  faker.setLocale(locale);
  const randomFirstName = faker.name.firstName();
  const randomLastName = faker.name.lastName();
  const randomAddress = `${faker.address.country()} ${faker.address.city()} ${faker.address.streetName()}`;
  const randomPhone = faker.phone.number()

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    phone: randomPhone,
    address: randomAddress
  }
}


export function getRandomNum(min: number, max: number) {
  let result = Math.floor(Math.random() * (max - min) + min);
  return result;
}