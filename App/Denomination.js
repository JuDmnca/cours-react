import { Component } from 'react'

class Denomination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            message: '',
            results: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value, results: [], message: '' })
    }

    handleSubmit(e) {
        e.preventDefault()
        const { amount } = this.state

        if (amount != parseInt(amount)) {
            this.setState({ message: `Warning ${amount} is not an integer.` })
            return
        }

        this.setState({ amount : '', results: this.calcul(amount) })
    }

    calcul(amount) {
        const results = [{'amount' : amount}]

        for (const token of this.props.denominations) {
            let nbr = Math.floor(amount / token)
            if (nbr >= 1) {
                amount = amount - (nbr * token)
                results.push({ 'token': token, 'count': nbr })
            }
        }
        return results
    }

    render() {
        const { amount, results, message } = this.state
        return (
            <div>
                {message && <p className="alert alert-primary">{message}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h3>Amount : </h3>
                        <input className="form-control"
                            type="text"
                            onChange={this.handleChange}
                            value={amount}
                            name="amount"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Calcul change</button>
                </form>
                { results.length > 0 && (
                    <div className="form-group pt-3">
                        <h3>With the amount : {results[0].amount}, the change will be :</h3>
                        <ul>
                            {results.slice(1).map((t, i) => (
                                <li key={i}>{t.count} token(s) of {t.token}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default Denomination
