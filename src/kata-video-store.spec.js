import assert from 'chai';
import {MovieType, statement} from "./kata-video-store.js";

describe("aa", () => {
    it("stuff", () => {
        const customer =
            {
                name: "martin",
                rentals: [
                    // {movie: {title: "Memento", code: MovieType."elders"}, days: 6},
                    {movie: {title: "Star Wars", code: MovieType.NEW_RELEASE}, days: 6},
                    {movie: {title: "Sofia", code: MovieType.CHILDREN}, days: 7},
                    {movie: {title: "Inception", code: MovieType.REGULAR}, days: 5}
                ]
            }
        ;
        const expected = `Rental Record for martin
\tStar Wars\t18
\tSofia\t7.5
\tInception\t6.5
Amount owed is 32
You earned 4 frequent renter points
`;
        const actual = statement(customer);
        assert.expect(actual).to.be.eq(expected)
    });
});