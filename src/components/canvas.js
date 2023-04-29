import React from 'react';

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.draw = function(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 15;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}
function Sphere (x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;


   this.draw = function (c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 50;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };


}

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

        let isSpaceDown = false;
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
                isSpaceDown = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.code === 'Space') {
                isSpaceDown = false;
            }
        });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init()
        })

        let particles;
        let sphere;
        function init() {
            particles = [];

            for (let i = 0; i < 1500; i++) {
                const canvasWidth = canvas.width + 1000;
                const canvasHeight = canvas.height + 2000;

                const x = Math.random() * canvasWidth - canvasWidth / 2;
                const y = Math.random() * canvasHeight - canvasHeight / 2;
                const radius = 2 * Math.random();

                const color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, radius, color));

            }
            sphere = new Sphere(canvas.width / 2, canvas.height / 2, 100, 'blue');
        }

        let radians = 0;
        let alpha = 1;
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = `rgba(10, 10, 10, ${alpha})`;
            c.fillRect(0, 0, canvas.width, canvas.height);

            c.save();
            c.translate(canvas.width / 2, canvas.height / 2);
            c.rotate(radians);
            particles.forEach(particle => {
                particle.draw(c);
            });
            c.restore();
            sphere.draw(c);


            radians += 0.003;

            if (isSpaceDown && alpha >= 0.03) {
                alpha -= 0.01;
            } else if (!isSpaceDown && alpha < 1) {
                alpha += 0.01;
            }
        }

        init();
        animate();
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}



export default Canvas;
