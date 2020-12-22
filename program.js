class Subject {
    constructor() {
        this._observers = []
        this.state = {}
    }

    Attach(observer) {
        this._observers.push(observer)
    }

    Detach(observer) {
        this._observers = this._observers.filter(o => o !== observer);
    }

    Notify(mess) {
        this.state = mess
        this._observers.forEach(obs => obs.Update(this))
    }
}

class Message {
    constructor(title, hashtags, format, text) {
        this.title = title
        this.hashtags = hashtags
        this.format = format
        this.text = text
    }

    Inform(sub) {
        sub.Notify(this)
    }
}

class Observer {
    constructor(subs) {
        this.subscriptions = subs
    }

    HasHashtags(hashtags) {
        let check = false
        this.subscriptions.forEach(hash => {
            if (hashtags.includes(hash)) {
                check = true
            }
        })
        return check
    }

    Update(subject) {
        if (this.subscriptions.includes(subject.state.format) || this.HasHashtags(subject.state.hashtags)) {
            console.log(subject.state.text)
        }
    }
}

module.exports = { Subject, Message, Observer }