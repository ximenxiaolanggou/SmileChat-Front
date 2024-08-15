export class WxLogin {

    constructor(params: WxLoginParams) {

    }
}

export interface WxLoginParams {
    self_redirect: boolean
    id: string
    appid: string
    scope: string
    redirect_uri: string
    state: number
    style: string
    href: string
}
