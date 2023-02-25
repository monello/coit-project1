import React, { Component } from "react";
import { Ellipsis } from "../Ellipsis";

import "./BooksList.css";

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        imageLinks: {
            thumbnail: string;
        };
    };
}

interface BooksListState {
    loading: boolean;
    books: Book[];
}

export class BooksList extends Component<{}, BooksListState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            loading: true,
            books: [],
        };
    }

    async componentDidMount() {
        const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:stephen+king&printType=books&maxResults=20`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            ...this.state,
            loading: false,
            books: data.items,
        });
    }

    render() {
        return (
            <div className="list-container">
                <h1>Stephen King Books</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="published">Published Date</th>
                            <th>Description</th>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.loading && (
                            <tr>
                                <td colSpan={4}>Loading...</td>
                            </tr>
                        )}
                        {!this.state.loading &&
                            this.state.books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.volumeInfo.title}</td>
                                    <td>{book.volumeInfo.publishedDate}</td>
                                    <td>
                                        <Ellipsis
                                            text={book.volumeInfo.description}
                                            maxLength={500}
                                        />
                                    </td>
                                    <td>
                                        {book.volumeInfo.imageLinks && (
                                            <img
                                                src={
                                                    book.volumeInfo.imageLinks
                                                        .thumbnail
                                                }
                                                alt={book.volumeInfo.title}
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
