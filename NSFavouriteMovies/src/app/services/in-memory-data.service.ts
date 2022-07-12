import { Injectable } from '@angular/core';
import {Content} from "../models/content";
import {MOCKMOVIES} from "../data/mock-movies";
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const movies: Content[] = MOCKMOVIES;
    return { movies };
  }

  genId(movies: Content[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((c) => c.id ?? 0)) + 1
      : 0;
  }
}
