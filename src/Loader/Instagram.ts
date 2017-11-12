import { Promise } from "core-js/library/web/timers";

export default class Instagram {

    public getHashtags(user: string): string[] {
        // let headers = new Headers()
        // headers.append('referer', '')
        // // headers.append('origin', '')
        // fetch('https://www.instagram.com/whizzzkid/?__a=1', {
        //         mode: 'no-cors',
        //         headers: headers
        //     }).then((response) => {
        //         console.log(response.status)
        //         return response.json()
        //     }).then(data => {
        //         console.log(data)
        //     })
        return ['food', 'tattoo', 'dummy']
    }

}
