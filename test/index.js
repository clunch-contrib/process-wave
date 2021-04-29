import Clunch from 'clunch/dist/clunch';
import processWave from '../index';
import image from './test.clunch';

window.clunch = new (Clunch.series('ui-process-wave', processWave))({
    el: document.getElementById('root'),
    time: 2000,
    data() {
        return {
            process: 0,
            deep: 0
        };
    },
    mounted() {
        var that = this;

        setTimeout(function () {
            that.process = Math.random();
        },500);

        setInterval(function () {
            that.process = Math.random();
        }, 4000);

        this.deep = 1;
        setInterval(function () {
            that.deep = that.deep == 0 ? 1 : 0;
        }, 2000);
    },
    render: image
});
