import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
  



export class ChartComponent implements OnInit {
  chartInstance: any;

  private currentRange: 'monthly' | 'yearly' = 'monthly'; // Default range

  private months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  tooltipOptions = {
    showDelay: 300,   // Delay before showing tooltip
    hideDelay: 200,   // Delay before hiding tooltip
    tooltipStyleClass: 'custom-tooltip', // Custom style class
    tooltipZIndex: 100, // Ensure tooltip appears above
  };
  chartOption: echarts.EChartsOption = {
     toolbox: {
        show: true,
        right: 10,
        top: 10,
        feature: {
          myTool: {
            show: true,
            title: 'Select Range',
            icon: 'path://M8.2,10.5h-1.8v-1.8h1.8v1.8zM6.4,7.7v-1.8h1.8v1.8H6.4zM8.2,5.1v-1.8h1.8v1.8H8.2z',
            onclick: () => {
              // Show or hide the dropdown menu (or handle any other action)
              const dropdown = document.getElementById('toolbox-dropdown');
              if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
              }
            }
          }
        }
      },
    backgroundColor: '#FFFFFF',
    title: {
      text: 'إحصائيات استخدام القسيمة',     // Main title
      subtext: 'Sub-title (optional)',// Sub-title (optional)
      left: 'right',                 // Position the title (can be 'left', 'center', or 'right')
      top: 'top',                     // Can be 'top', 'bottom', or use pixel/percentage values
      textStyle: {
        fontSize: 20,               // Font size for the title
        fontWeight: 'bold',         // Font weight (can be 'normal', 'bold', etc.)
        color: '#333'               // Title color
      },
      subtextStyle: {
        fontSize: 14,               // Sub-title font size
        color: '#666'               // Sub-title color
      }
    },
    tooltip: {
      trigger: 'axis',
      position: function (point, params, dom, rect, size) {
        // point: [x, y] coordinates of the data point
        // size.viewSize: [width, height] of the chart container
        // Adjust the tooltip to be placed near the dot, not the mouse cursor
        return [point[0] + 1, point[1] - 1];  // Adjust based on desired position
      },
      // axisPointer:{type:"line"},
      formatter: (params: any) => {
        const value = params[0].value;
        const percentage = ((value / 250) * 100).toFixed(1);
        return `
      <div  [pTooltip]="tooltipContent" [tooltipOptions]="tooltipOptions" tooltipPosition="left">
      <ng-template #tooltipContent>
  <div class="flex align-items-center">
       <span style="font-weight:bold;">Value: ${value}</span><br>
         ${percentage}
  </div>
</ng-template>
       
      </div>
    `;
      },
      backgroundColor: '#252849',
      borderColor: '#252849',
      textStyle: { color: '#fff' },
      padding: [8, 12],
    },
    xAxis: {
      type: 'category',
      data: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      axisLabel: {
        rotate: 0,
        color: '#8E8E8E',
        fontSize: 12,
        fontWeight: 'bold',
      },
      axisLine: { show: false },
      axisTick: { show: false },
      // splitLine:{show:true}

    },
    yAxis: {
      type: 'value',
      // show: true,
      axisTick: { show: false },
      splitLine: { show: true },
      axisLabel: { show: false }

    },
    series: [{
      data: [120, 80, 150, 180, 170, 210, 190, 250, 220, 110, 140, 160],
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 20,
      showSymbol: false,
      emphasis: {
        focus: 'series',         // Highlight series when hovered
     
      },
      itemStyle: {
        color: '#7F56D9',
        borderColor: '#fff',
        borderWidth: 2
      },
      lineStyle: {
        color: '#7F56D9',
        width: 3
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(127, 86, 217, 0.3)' },
          { offset: 1, color: 'rgba(127, 86, 217, 0)' }
        ])
      }
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '30%',
      containLabel: true
    }
  
  };
  updateChart() {
    const data = this.currentRange === 'monthly'
      ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      : ['2020', '2021', '2022', '2023']; // Sample data for yearly

      
    
    this.chartInstance.setOption(this.chartOption);

  }
  onDropdownChange(range: 'monthly' | 'yearly') {
    this.currentRange = range;
    this.updateChart(); // Update chart based on selected range
  }
  constructor() { 
   
  }

  ngOnInit(): void {
      const chartDom = document.getElementById('main');
    this.chartInstance = echarts.init(chartDom);
      this.updateChart(); // Initialize chart with default range

  }


}
