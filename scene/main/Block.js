var Block = function (game, position) {
    var p = position
    var img = game.imageByName("block")
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lives: p[2] || 1,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.kill = function () {
        o.lives--
            if (o.lives < 1) {
                o.alive = false
            }
    }
    o.collide = function (ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o
}