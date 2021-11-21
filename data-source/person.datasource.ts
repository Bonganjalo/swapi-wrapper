import { RESTDataSource } from "apollo-datasource-rest";

interface PersonType {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export class Person extends RESTDataSource {
  constructor(baseUrl: string) {
    super();
    this.baseURL = baseUrl;
  }

  async findAll() {
    const swapiResponse = await this.get("people");
    return Array.isArray(swapiResponse.results)
      ? swapiResponse.results.map((person) => this.toPerson(person))
      : [];
  }

  async fibdAllByPage({ pageNumber }: { pageNumber: number }) {
    const swapiResponse = await this.get("people/", { page: pageNumber });
    return Array.isArray(swapiResponse.results)
      ? swapiResponse.results.map((person) => this.toPerson(person))
      : [];
  }

  async findByName({ name }: { name: string }) {
    const swapiResponse = await this.get("people/", { search: name });
    return Array.isArray(swapiResponse.results)
      ? swapiResponse.results.map((person) => this.toPerson(person))
      : [];
  }
  toPerson(person: any): PersonType {
    return {
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      homeworld: person.homeworld
    };
  }
}
