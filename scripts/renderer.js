class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        // this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
        this.drawBezierCurve({x: 100, y: 100}, {x: 300, y: 600}, {x: 600, y: 600}, {x: 200, y: 100}, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        this.drawBezierCurve({x: 600, y: 300}, {x: 200, y: 800}, {x: 600, y: 600}, {x: 400, y: 200}, this.num_curve_sections, [0, 0, 255, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        this.drawCircle({x: 300, y: 300}, 100, this.num_curve_sections, [255, 255, 3, 255], framebuffer);
        this.drawCircle({x: 500, y: 400}, 75, this.num_curve_sections, [155, 33, 255, 255], framebuffer);
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        let vertex_list = [{x: 100, y: 100},
            {x: 200, y: 100},
            {x: 250, y: 200},
            {x: 150, y: 300},
            {x: 100, y: 200}];

        this.drawConvexPolygon(vertex_list, [255, 0, 0, 255], framebuffer);

        let vertex_list2 = [
            {x: 400, y: 150},
            {x: 450, y: 250},
            {x: 550, y: 275},
            {x: 475, y: 350},
            {x: 365, y: 290},
            {x: 340, y: 200}
        ]
        this.drawConvexPolygon(vertex_list2, [0, 255, 255, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        // A
        this.drawLine({x: 225, y: 370}, {x: 245, y: 430}, [255, 0, 0, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 225, y: 370}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 245, y: 430}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 245, y: 430}, {x: 265, y: 370}, [255, 0, 0, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 245, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 265, y: 370}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 235, y: 400}, {x: 255, y: 400}, [255, 0, 0, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 235, y: 400}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 255, y: 400}, [0, 0, 0, 255], framebuffer);
        }

        //N
        this.drawLine({x: 275, y: 370}, {x: 275, y: 430}, [0, 0, 255, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 275, y: 370}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 275, y: 430}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 275, y: 430}, {x: 315, y: 370}, [0, 0, 255, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 315, y: 370}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 315, y: 370}, {x: 315, y: 430}, [0, 0, 255, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 315, y: 430}, [0, 0, 0, 255], framebuffer);
        }

        //T
        this.drawLine({x: 325, y: 430}, {x: 365, y: 430}, [0, 255, 0, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 325, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 365, y: 430}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 345, y: 430}, {x: 345, y: 370}, [0, 255, 0, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 345, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 345, y: 370}, [0, 0, 0, 255], framebuffer);
        }

        //H
        this.drawLine({x: 375, y: 430}, {x: 375, y: 370}, [254, 175, 64, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 375, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 375, y: 370}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 375, y: 400}, {x: 415, y: 400}, [254, 175, 64, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 375, y: 400}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 415, y: 400}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 415, y: 430}, {x: 415, y: 370}, [254, 175, 64, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 415, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 415, y: 370}, [0, 0, 0, 255], framebuffer);
        }

        // O
        this.drawCircle({x: 455, y: 400}, 25, this.num_curve_sections, [88, 167, 95, 255], framebuffer);

        //N
        this.drawLine({x: 490, y: 370}, {x: 490, y: 430}, [150, 200, 37, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 490, y: 370}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 490, y: 430}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 490, y: 430}, {x: 530, y: 370}, [150, 200, 37, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 530, y: 370}, [0, 0, 0, 255], framebuffer);
            }
        this.drawLine({x: 530, y: 370}, {x: 530, y: 430}, [150, 200, 37, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 530, y: 430}, [0, 0, 0, 255], framebuffer);
        }

        // Y
        this.drawLine({x: 540, y: 430}, {x: 580, y: 400}, [255, 192, 203, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 540, y: 430}, [0, 0, 0, 255], framebuffer);
            this.drawVertex({x: 580, y: 400}, [0, 0, 0, 255], framebuffer);
        }
        this.drawLine({x: 580, y: 430}, {x: 580, y: 400}, [255, 192, 203, 255], framebuffer);
        if(this.show_points == true) {
            this.drawVertex({x: 580, y: 430}, [0, 0, 0, 255], framebuffer);
        }
        this.drawBezierCurve({x: 580, y: 400}, {x: 615, y: 280}, {x: 530, y: 100}, {x: 465, y: 250}, this.num_curve_sections, [255, 192, 203, 255], framebuffer);

        // ! point
        let top = [{x: 620, y: 390}, {x: 620, y: 430}, {x: 600, y: 430}, {x: 600, y: 390}];
        this.drawConvexPolygon(top, [50, 255, 255, 255], framebuffer);
        let bottom =[{x: 620, y: 360}, {x: 620, y: 380}, {x: 600, y: 380}, {x: 600, y: 360}];
        this.drawConvexPolygon(bottom, [50, 255, 255, 255], framebuffer);
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        let t = 0;
        let step = 1/num_edges;
        let currentPoint = {x: 0, y: 0};
        while (1) {
            let x = Math.round((((1-t)**3) * p0.x) + (3 * ((1-t)**2) * t * p1.x) + (3 * (1-t) * (t**2) * p2.x) + (t**3 * p3.x));
            let y = Math.round((((1-t)**3) * p0.y) + (3 * ((1-t)**2) * t * p1.y) + (3 * (1-t) * (t**2) * p2.y) + (t**3 * p3.y));
            if (t == 0) {
                currentPoint.x = x;
                currentPoint.y = y;
             } else {
                let newPoint = {x: x, y: y};
                this.drawLine(currentPoint, newPoint, color, framebuffer);
                if(this.show_points == true) {
                    this.drawVertex(newPoint, [0, 0, 0, 255], framebuffer);
                    this.drawVertex(currentPoint, [0, 0, 0, 255], framebuffer);
                }
                currentPoint.x = newPoint.x;
                currentPoint.y = newPoint.y;
            }

            if (t >= 1.0) {
                break;
            }

            if (1.0 - step < t) {
                step = 1.0 - t;
            }

            t = t + step;
        }        
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let step = 360/num_edges;
        let phi = 0;
        let currentPoint = {x: 0, y: 0};
        while (1) {
            let x = Math.round(center.x + radius * Math.cos(this.degrees_to_radians(phi)));
            let y = Math.round(center.y + radius * Math.sin(this.degrees_to_radians(phi)));
            if (phi == 0) {
                currentPoint.x = x;
                currentPoint.y = y;
            } else {
                let newPoint = {x: x, y: y};
                this.drawLine(currentPoint, newPoint, color, framebuffer);
                if(this.show_points == true) {
                    this.drawVertex(newPoint, [0, 0, 255, 255], framebuffer);
                    this.drawVertex(currentPoint, [0, 0, 255, 255], framebuffer);
                }
                currentPoint.x = newPoint.x;
                currentPoint.y = newPoint.y;
            }
            if (phi >= 360.0) {
                break;
            }

            if (360 - step < phi) {
                step = 360 - phi;
            }

            phi = phi + step;
            console.log("Step : " +step);

        }
    }

    degrees_to_radians(degrees) {
      let pi = Math.PI;
      let radians = degrees * (pi/180);
      return radians;
      
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon

        let sides = vertex_list.length;
        console.log(sides);
        for (let i = 2; i < sides; i++) {
            this.drawTriangle(vertex_list[0], vertex_list[i-1], vertex_list[i], color, framebuffer);
            if(this.show_points == true) {
                this.drawVertex(vertex_list[0], [0, 0, 0, 255], framebuffer);
                this.drawVertex(vertex_list[i-1], [0, 0, 0, 255], framebuffer);
                this.drawVertex(vertex_list[i], [0, 0, 0, 255], framebuffer);
            }
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        let bottomLeft = {x: (v.x -1), y: (v.y-1)};
        let bottomRIght = {x: (v.x + 1), y: (bottomLeft.y)};
        let topRight = {x: bottomRIght.x, y: (v.y + 1)};
        let topLeft = {x: bottomLeft.x, y: topRight.y};

        this.drawLine(bottomLeft, bottomRIght, color, framebuffer);
        this.drawLine(bottomRIght, topRight, color, framebuffer);
        this.drawLine(topRight, topLeft, color, framebuffer);
        this.drawLine(topLeft, bottomLeft, color, framebuffer);
    
    }

    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(framebuffer, px, color) {
	    framebuffer.data[px + 0] = color[0];
	    framebuffer.data[px + 1] = color[1];
	    framebuffer.data[px + 2] = color[2];
	    framebuffer.data[px + 3] = color[3];
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                        // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }

    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1;
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (x <= x1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            x += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                y += iy;
            }
        }
    }

    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1;
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (y <= y1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            y += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy input points
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        
        // Sort points in ascending y order
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

