export function jieliu(fn, deley) {
    let time = 0
    let ctx = this
    let args = arguments
    return function l() {
        let time1 = new Date();
        if (time1 - time > deley) {
            fn.apply(ctx, args)
            time = new Date()
        }
    }
}

export function fangdou(fn, deley) {
    let time = null
    let ctx = this
    let args = arguments
    return function () {
        if (time) clearTimeout(time)
        time = setTimeout(
            function () {
                fn.apply(ctx, args)
                //最后执行完成重置time
                time = null
            }, deley)
    }
}