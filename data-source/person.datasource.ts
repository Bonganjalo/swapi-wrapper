import { RESTDataSource } from "apollo-datasource-rest";
const got = require("got");
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

    if (Array.isArray(swapiResponse.results)) {
      swapiResponse.results = swapiResponse.results.map((person) =>
        this.toPerson(person)
      );
      return swapiResponse;
    }
    return [];
  }

  async findAllByPage({ page }) {
    const swapiResponse = await this.get("people/", { page });

    if (Array.isArray(swapiResponse.results)) {
      swapiResponse.results = swapiResponse.results.map((person) =>
        this.toPerson(person)
      );
      return swapiResponse;
    }
    return [];
  }

  async findByName({ name }: { name: string }) {
    const swapiResponse = await this.get("people/", { search: name });
    if (Array.isArray(swapiResponse.results)) {
      swapiResponse.results = swapiResponse.results.map((person) =>
        this.toPerson(person)
      );
      return swapiResponse;
    }
    return [];
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
