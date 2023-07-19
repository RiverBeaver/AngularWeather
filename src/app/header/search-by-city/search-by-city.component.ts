import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeocodingService } from 'src/app/entities/servers/geocoding.server';

@Component({
  selector: 'search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.scss'],
})
export class SearchByCityComponent implements OnChanges {
  @Input() currentCity!: string | null;
  
  public searchByCityForm: FormGroup = new FormGroup({
    'nameOfCity': new FormControl(this.currentCity, Validators.required),
  });;

  constructor(private geocodingService: GeocodingService) {}
  
  public ngOnChanges(changes: SimpleChanges): void {
    this.searchByCityForm.setValue({'nameOfCity': this.currentCity})
  }

  public submit() {
    this.geocodingService.setCoordinates(this.searchByCityForm.getRawValue().nameOfCity);
  }

}
