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
    isLoading: boolean;
    error: any;
    books: Book[];
}

export class BooksList extends Component<{}, BooksListState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            isLoading: true,
            error: "",
            books: [],
        };
    }

    // // this examples uses the fetch->then->catch approach to process promises + .catch()
    // componentDidMount() {
    //     const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:stephen+king&printType=books&maxResults=20`;
    //     fetch(url, {
    //         method: `GET`,
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({
    //                 ...this.state,
    //                 error: "",
    //                 isLoading: false,
    //                 books: data.items,
    //             });
    //         })
    //         .catch((error) => {
    //             this.setState({
    //                 ...this.state,
    //                 error: error,
    //                 isLoading: false,
    //             });
    //         });
    // }

    // this example uses the async-await approach to handle promises + try-catch
    async componentDidMount() {
        const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:stephen+king&printType=books&maxResults=20`;
        try {
            const response = await fetch(url, {
                method: `GET`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            this.setState({
                ...this.state,
                isLoading: false,
                books: data.items,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    error: `The following error occured while trying to fetch the books: ${error.message}`,
                });
            } else {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    error: "An unexpected error occured when trying to fetch the books",
                });
            }
        }
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
                        {this.state.isLoading && (
                            <tr>
                                <td colSpan={4}>isLoading...</td>
                            </tr>
                        )}
                        {!this.state.isLoading &&
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
                        {!!this.state.error && (
                            <tr>
                                <td colSpan={4}>{this.state.error}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
