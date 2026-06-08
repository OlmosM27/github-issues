import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector';
import { IssueItem } from '../../components/issue-item/issue-item';

@Component({
  selector: 'app-issues-list-page',
  imports: [CommonModule, LabelsSelectorComponent, IssueItem],
  templateUrl: './issues-list-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListPage {
  issuesSvc = inject(IssuesService);

  get labelsQuery() {
    return this.issuesSvc.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesSvc.issuesQuery;
  }
}
