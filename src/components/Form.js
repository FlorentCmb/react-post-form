// Import librairies
import React from 'react'

export default class Form extends React.Component {

    state = {
        title: '',
        poster: '',
        comment: ''

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        // Removing button's default behaviour
        e.preventDefault()

        // Axios API call
        const url = "https://post-a-form.herokuapp.com/api/movies/"
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        }

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(`Movie successfully added !`)
                }
            }).catch(e => {
                console.error(e);
                alert('An error has occured')
            })

    }

    render() {

        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Favorite Movie</legend>

                        <label htmlFor="title">Movie</label>
                        <input name="title" type="text" placeholder="Type your favorite movie's name here" onChange={this.onChange} value={this.state.title} required />

                        <label htmlFor="poster">Poster URL</label>
                        <input name="poster" type="text" placeholder="URL of the poster" onChange={this.onChange} value={this.state.poster} required />

                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" placeholder="What you think about the movie" onChange={this.onChange} value={this.state.comment} required />

                        <input type="button" value="Submit" onClick={this.submit} />
                    </fieldset>
                </form>
            </div>
        )
    }
}